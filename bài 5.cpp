#include <stdio.h>
int main() {
    int nam, thang, soNgay;
    printf("Nhap nam: ");
    scanf("%d", &nam);
    printf("Nhap thang: ");
    scanf("%d", &thang);
    int namNhuan = (nam%4==0&&nam%100!=0) || (nam%400==0);
    switch (thang) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            soNgay = 31;
            break;
        case 4: case 6: case 9: case 11:
            soNgay = 30;
            break;
        case 2:
        if (namNhuan) {
                soNgay = 29;
            } else {
                soNgay = 28;
            }
            break;
        default:
            printf("Thang khong hop le!\n");
            return 1;
    }
    printf("Nam %d, thang %d co %d ngay.\n", nam, thang, soNgay);

    return 0;
}
        
    
