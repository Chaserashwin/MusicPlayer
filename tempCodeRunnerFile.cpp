#include<iostream>
using namespace std;
void swap(int x,int y,int a[])
{
    int temp=a[x];
        a[x]=a[y];
        a[x]=temp;
}
int partition(int l,int h,int a[])
{
    cout<<"i m part";
    int pivot=a[l];
    int i=l;
    int j=h;
    while(i<j)
    {
        while((a[i]<=pivot)) 
        {
            i++;
        }    
        while((a[j]>pivot))
        {
            j--;
        }
        if(i<j)
        swap(i,j,a);
    }
    swap(j,l,a);
    cout<<" j="<<j;
    return j;
}
void Quick_Sort(int l,int h,int a[])
{
    if(l<h)
    {
        int p=partition(l,h,a);
        Quick_Sort(l,p-1,a);
        Quick_Sort(p+1,h,a); 
    }
}
int main()
{
    int n;
    cout<<"enter no. of elements:";
    cin>>n;
    int a[n];
    for(int i=0;i<n;i++)
    {
        cin>>a[i];
    }
    Quick_Sort(0,n-1,a);
    cout<<"After Quick sorting:"<<endl;
    for(int i=0;i<n;i++)
    {
        cout<<a[i]<<" ";
    }
}