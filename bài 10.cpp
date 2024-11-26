#include <stdio.h>
int main(){
    int n;
    int prime=1;
    printf("Moi nhap vao n: ");
    scanf("%d",&n);
    for(int i=2;i<n;i++){
        if(n%i==0){
            printf("%d khong phai so nguyen to",n);
            prime++;
        }
    }
    if(prime==1){
    printf("%d la so nguyen to",n);
    }
    return 0;
}
