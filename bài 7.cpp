#include<stdio.h>
int main(){
	int x;
	printf("Nhap vao 1 so nguyen :\n");
	scanf("%d",&x);
	for(int i=1;i<=x;i++)
	if(x%i==0){
		printf("uoc cua %d la %d\n",x,i);
	}
	return 0;
}
