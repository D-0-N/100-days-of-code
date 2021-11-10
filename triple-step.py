def triple_step(i):
    if i==1:return 1
    if i==2:return 2
    if i==3:return 3
    return triple_step(i-1)*triple_step(i-2)*triple_step(i-3)

print(triple_step(4))