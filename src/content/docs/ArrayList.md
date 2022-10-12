<h1 className="mh1">ArrayList</h1>
<p>Java ArrayList class uses a dynamic array for storing the elements. It is like an array, but there is no size limit. We can add or remove elements anytime.
 So, it is much more flexible than the traditional array. It is found in the java.util package. It is like the Vector in C++.

<br/>
Note : The ArrayList in Java can have the duplicate elements also.
</p>
<h3 className="mh3">Constructor : </h3>
<code>
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
</code>

<h3 className="mh3">add(T value) </h3>
<p>Add methods adds a value at last index</p>
<code>
public boolean add(T val) {
    if (arr.length == size) {
        doubleArr();
    }
    arr[size++] = (T) val;
    return ((T) arr[size - 1]).equals(val);
}
</code>
<h3 className="mh3">Double Array When size is Full : </h3>
<code>
private void doubleArr() {
    Object[] temp = new Object[arr.length * 2];
    for (int i = 0; i < arr.length; i++) {
        temp[i] = arr[i];
    }
        arr = temp;
}
</code>
<h3 className="mh3">Add at index</h3>
<code>
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
</code>


<br>
<br>

- <a class="blue" href="https://github.com/nisabmohd/DS-Implementations/blob/master/src/Lists/ArrayListCustom.java">Check the ArrayList.java complete code on GitHub</a>

<br>

- <a class="blue" href="https://github.com/dsatease/ds-ease-react/blob/main/src/content/docs/ArrayList.md">Edit this page</a>

<br><br>

<div class="same-line-gap">
<a class="blue" href="/"></a>
<a class="blue" href="/lists?topic=single-linked-list">Next \> </a>
</div>


<br>
<br>
<br>
<br>