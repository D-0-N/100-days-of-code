def triple_step(n):
    memo=[0]*n
    memo[0]=1
    memo[1]=2
    memo[2]=3
    if n==1:
        return 1
    elif n==2:
        return 2
    elif n==3:
        return 3
    for i in range(3,n):
        memo[i]=memo[i-1]*memo[i-2]*memo[i-3]
    return memo[n-1]

print(triple_step(8))