def findPath(maze):
    if maze==None or len(maze)==0:
        return None
    path=[]
    if(getPath(maze,len(maze)-1,len(maze[0])-1,path)):
        return path
    return None

def getPath(maze,row,col,path):
    if(col<0 or row<0):
        return False
    isAtOrigin=row==0 and col==0
    if(isAtOrigin or getPath(maze,row,col-1,path) or getPath(maze,row-1,col,path)):
        p=(row,col)
        path.append(p)
        return True
    return False