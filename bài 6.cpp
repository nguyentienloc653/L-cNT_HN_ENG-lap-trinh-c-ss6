#include<stdio.h>
int main(){
	for(int i=1;i<101;i++)
	if(i%15==0){
		printf("fizzbuzz\n");
	}else if(i%3==0){
		printf("fizz\n");
	}else{
		printf("buzz\n");
	}
	return 0;
}
