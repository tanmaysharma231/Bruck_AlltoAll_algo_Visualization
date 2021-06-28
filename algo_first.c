    #include<stdio.h>
#include<stdlib.h>
#include<math.h>
#include<conio.h>
//#include<dos.h>
void print(int p,int s[p][p]);
int main()
{

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
int p=6;
int  s[6][6]={{00,10,20,30,40,50},{01,11,21,31,41,51},{02,12,22,32,42,52},{03,13,23,33,43,53},{04,14,24,34,44,54},{05,15,25,35,45,55}};
 //Each column shifts down by i
//         printf("t1\n ");        

for(int j=0;j<p;j++){
	//for(int i=0;i<p;i++)
	int pos=j;
    	while(pos)  
    	{  
        
            	int temp = s[0][j];  
            	for(int i = 0; i < p - 1; i++)  
                		s[i][j] = s[i + 1][j];  
  //printf("t5\n ");     
 		           s[p - 1][j] = temp;  
 		           pos--;
 	       }  
	 //	  printf("t2\n ");     
                    }
//printf("t3\n ");     
 print(p,s);
  //  printf("t4\n ");     


int logg=log(p)/log(2);
for(int k=0;k<=logg;k++)
	{

		// Move data to (i+2k)
        		
	     for(int i=0;i<p;i++)
{
	 	           	if ((i>> k)&1){
                        
			int pos=i;
			while(pos){
                        		int temp = s[i][p - 1];  
                            		for(int j = p - 1; j > 0; j--)  
                               			 s[i][j] = s[i][j - 1];  
  
                       			     s[i][0] = temp;
				
				
				pos--;
     }

	        	   		         }

		}
	}
	printf("\n");
print(p,s);

}
void print(int p,int s[p][p]){
   // clrscr();
    for(int i=0;i<p;i++){
 printf("\n");
    for(int j=0;j<p;j++)
      {  printf("%d  ",s[i][j]);        
        
      //  delay(1000);
      }
}

    
}
