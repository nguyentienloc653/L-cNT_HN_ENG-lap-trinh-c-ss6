#include <stdio.h>
int main() {
    float laisuat,loinhuan,tienguibandau,tiengui,thang;  
    printf("Tien ban dau: ");
    scanf("%f",&tiengui);
    tienguibandau=tiengui;
    printf("lai suat: ");
    scanf("%f",&laisuat);
    printf("Thang gui: ");
    scanf("%f",&thang);
    for(int i=0;i<thang;i++){
        loinhuan=tiengui+(laisuat/100*tiengui);
        tiengui=loinhuan;
    }
    printf("Tien lai: %.3f\n",tiengui-tienguibandau);
    printf("Tien nhan duoc: %.3f\n",loinhuan);
    return 0;
}
