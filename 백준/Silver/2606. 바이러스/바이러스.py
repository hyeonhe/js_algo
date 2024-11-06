import sys
def input():
  return sys.stdin.readline().rstrip()

c = int(input())
t = int(input())
graph = [[] for i in range(c+1)]
for _ in range(t):
  a, b = map(int, input().split())
  graph[a].append(b)
  graph[b].append(a)

visited = [False] * (c+1)
cnt = 0

def dfs(graph, v, visited):
  global cnt
  visited[v] = True
  for i in graph[v]:
    if not visited[i]:
      cnt += 1
      dfs(graph, i, visited)

dfs(graph, 1, visited)
print(cnt)