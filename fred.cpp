#include <iostream>
#include <string>

using namespace std;

struct node
{
    int data;
    node *next;
};

int main()
{
    node *first = new node;
    node *second = new node;
    node *third = new node;
    node *fourth = new node;

    first->data = 20;
    second->data = 40;
    third->data = 60;
    fourth->data = 80;

    first->next = second;
    second->next = third;
    third->next = fourth;
    fourth->next = nullptr;

    node *current = first;

    while (current != nullptr)
    {
        cout << current->data << " ";

        current = current->next;
    }
    cout << "\n";

    // cout << first->data << ",";
    // cout << first->next->data << ",";
    // cout << first->next->next->data << ",";
    // cout << first->next->next->next->data << endl;

    delete first;
    delete second;
    delete third;
    delete fourth;
    return 0;
}