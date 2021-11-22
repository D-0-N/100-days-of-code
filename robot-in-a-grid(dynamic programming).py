def findPath(maze):
    if maze==None or len(maze)==0:
        return None
    path=[]
    failedPoints=[]
    if(getPath(maze,len(maze)-1,len(maze[0])-1,path,failedPoints)):
        return path
    return None

def getPath(maze,row,col,path,failedPoints):
    if(col<0 or row<0):
        return False
    
    p=(row,col)

    if p in failedPoints:
        return False
    
    isAtOrigin=row==0 and col==0
    
    if(isAtOrigin or getPath(maze,row,col-1,path) or getPath(maze,row-1,col,path,failedPoints)):
        path.append(p)
        return True
    failedPoints.append(p)
    return False