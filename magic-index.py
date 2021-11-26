def magicIndex(arr,start,end):
    if end<start:
        return -1
    mid=int((start+end)/2)
    if arr[mid]==mid:
        return mid
    elif arr[mid]>mid:
        return magicIndex(arr,start,mid-1)
    else:
        return magicIndex(arr,mid+1,end)

