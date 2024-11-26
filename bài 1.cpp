#include <stdio.h>

int main(){
    int nember, sum = 0;

    for (int i = 1; i <= 5; i++){
        printf("Nhap so thu %d: ", i);
        scanf("%d", &nember);

    if (nember % 2 != 0){
            sum += nember;
        }
    }
    printf("Tong cac so le la: %d\n", sum);

    return 0;
}
