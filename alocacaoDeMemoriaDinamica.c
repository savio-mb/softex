#include <stdio.h>
#include <stdlib.h>

int main()
{
int *vetor;

vetor = malloc( sizeof(int*) * 20 );
vetor = realloc(vetor, 22 * sizeof(int));    
free(vetor);

return 0;
}
