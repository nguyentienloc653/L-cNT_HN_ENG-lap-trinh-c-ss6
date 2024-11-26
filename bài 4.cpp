#include<stdio.h>
#include<math.h>
int main(){
	float a,b,c,denta,x1,x2;
	printf("Nhap vao he so a b c\n");
	scanf("%f%f%f",&a,&b,&c);
	if(a==0){
		printf("Khong phai phuong trinh bac hai");
	}else{
		denta=b*b - 4*a*c;
		if(denta>0){
            x1 = (-b + sqrt(denta)) / (2*a);
            x2 = (-b - sqrt(denta)) / (2*a);
			printf("Phuong trinh co 2 nghiem phan biet x1 = %.2f, x2 = %.2f\n",x1,x2);
		}else if(denta==0){
			x1=-b/(2*a);
			printf("Phuong trinh co 1 nghiem kep x1 = x2 = %.2f\n",x1);
		}else {
			printf("Phuong trinh vo nghiem\n");
		}
	}
	return 0;
}
