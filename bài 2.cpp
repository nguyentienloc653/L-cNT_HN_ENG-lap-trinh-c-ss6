#include<stdio.h>
int main(){
	int nember,sochan=0,sole=0;
	for (int i = 1; i <= 5; i++){
        printf("Nhap so thu %d: ", i);
        scanf("%d", &nember);
    if (nember % 2== 0){
            sochan++;
		}else{
			sole++;
		}
	}
		printf("So luong so le la : %d\n",sole);
		printf("So luong so chan la : %d\n",sochan);
		return 0;
}
