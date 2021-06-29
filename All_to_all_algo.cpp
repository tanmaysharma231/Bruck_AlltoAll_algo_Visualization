#include<stdio.h>
#include<stdlib.h>
#include<math.h>
#include<windows.h>
#include<conio.h>
#include<iomanip>
#include<string>
#include <unistd.h>
#include <iostream>
using namespace std;
//#include<dos.h>
/*j=process number
 k=step number
 n/p=total no of processes
j=0	j=1	j=2	j=3	j=4	j=5
i=0	00	10	20	30	40	50
i=1	01	11	21	31	41	51
i=2	02	12	22	32	42	52
i=3	03	13	23	33	43	53
i=4	04	14	24	34	44	54
i=5	05	15	25	35	45	55
*/ 

void init(int p,int s[][100]);
void int_shift(int p, int s[][100]);
void communicate(int p, int s[][100]);
void final_rotate(int p, int s[][100]);
void print(int p,int s[][100]);


int main()
{


	int p=6,s[p][100];
	init(p,s);			//initialize values
	
	cout<<"\n";
	printf("\n");
			
						 //Each column shifts down by i
	int_shift(p,s);		//initial rotation
  
	 //print(p,s);		
	 cout<<"\n";
	communicate(p,s);		//communication

	//final_rotate(p,s);		//not done

}	


void print(int p,int s[][100]){
   system("CLS");
    for(int i=0;i<p;i++){
			 printf("\n");
   			 for(int j=0;j<p;j++)
      			{  cout <<setw(2) << setfill('0') <<s[i][j]<<"\t" ;       
        
      		
      				}
     
 }
 	printf("\n");
    	  sleep(1);
    
}



void init(int p,int s[][100])
{
	
	// s[6][6]={{00,10,20,30,40,50},{01,11,21,31,41,51},{02,12,22,32,42,52},{03,13,23,33,43,53},{04,14,24,34,44,54},{05,15,25,35,45,55}};
	for(int j=0;j<6;j++)
	        for(int i=0;i<6;i++)
	            s[j][i]=stoi(to_string(i)+to_string(j));
}



void int_shift(int p, int s[][100])
{	
	for(int j=0;j<p;j++)
	{
				
				int pos=j;
	    			while(pos)  
	    				{  
	                    				int temp = s[0][j];  
    		        				for(int i = 0; i < p - 1; i++)  
        	        				
											s[i][j] = s[i + 1][j];  
									
										
 		        				   s[p - 1][j] = temp;  
 		        				   print(p,s);
 		         				  pos--;
 	    			   		}  
	}
}








void communicate(int p, int s[][100])
{

	int logg=log(p)/log(2);

	for(int k=0;k<=logg;k++)
				{
					// Move data to (i+2k)
        	 			   for(int i=0;i<p;i++)
								{
	 	 			          	if ((i>> k)&1)
								     	{
          								int pos=i;
										while(pos){
                        				int temp = s[i][p - 1];  
                         					for(int j = p - 1; j > 0; j--)  						
								            					 s[i][j] = s[i][j - 1];  
                      
                       			 				 s[i][0] = temp;
                       			 				 print(p,s);
            												pos--;
    				    							 }			
	        	   		    	}
								}
				}	
}

//void final_rotate(int p, int s[][100]);

