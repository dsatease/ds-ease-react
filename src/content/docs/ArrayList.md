<h1 className="mh1">ArrayList</h1>
<p>Java ArrayList class uses a dynamic array for storing the elements. It is like an array, but there is no size limit. We can add or remove elements anytime.
 So, it is much more flexible than the traditional array. It is found in the java.util package. It is like the Vector in C++.

<br/>
Note : The ArrayList in Java can have the duplicate elements also.
</p>
<h3 className="mh3">Constructor : </h3>
<c>
 public class ArrayListCustom \< T \> {
    private final int DEFAULT_CAPACITY = 7;
    private int size = 0;
    private Object[] arr;
    public ArrayListCustom(int initialSize) {
        arr = new Object[initialSize];
    }
    public ArrayListCustom() {
        arr = new Object[DEFAULT_CAPACITY];
    }
 }
</c>

<h3 className="mh3">add(T value) </h3>
<p>Add methods adds a value at last index</p>
<c>
public boolean add(T val) {
    if (arr.length == size) {
        doubleArr();
    }
    arr[size++] = (T) val;
    return ((T) arr[size - 1]).equals(val);
}
</c>
<h3 className="mh3">Double Array When size is Full : </h3>
<c>
private void doubleArr() {
    Object[] temp = new Object[arr.length * 2];
    for (int i = 0; i < arr.length; i++) {
        temp[i] = arr[i];
    }
        arr = temp;
}
</c>
<h3 className="mh3">Add at index</h3>
<c>
public void add(int index, T val) {
     if (index > = size) {
        for (int i = 0; i < index - size - 1; i++) {
            his.add((T) new Object());
        }
        this.add(val);
    } else {
        doubleArr();
        for (int i =size - 1; i >= index; i--) {
            arr[i + 1] = arr[i];
        }
        arr[index] = val;
        size++;
    }
}
</c>