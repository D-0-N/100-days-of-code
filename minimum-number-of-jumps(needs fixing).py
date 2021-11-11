n=int(input())
arr=list(map(int,input().split()))
count=0
i=0
while i<len(arr)-1:
    if arr[i]==0:
        print(-1)
    else:
        step=max(arr[i:i+arr[i]])
        print(step)
        # i+=arr.index(step)
        # count+=1
# print(count)