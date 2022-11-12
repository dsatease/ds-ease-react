<h1 className="mh1">ArrayList</h1>
<p>Java ArrayList class uses a dynamic array for storing the elements. It is like an array, but there is no size limit. We can add or remove elements anytime.
 So, it is much more flexible than the traditional array. It is found in the java.util package. It is like the Vector in C++.

<br/>
Note : The ArrayList in Java can have the duplicate elements also.
</p>

<img src="https://firebasestorage.googleapis.com/v0/b/upload-pics-e599e.appspot.com/o/images%2Fpart3.2-arraylist-add.png?alt=media&token=e3b1f51f-bdc2-4cb1-bcf4-af36d699efdb" width="80%" />

<br>
<p>Internally ArrayList is array with default capacity ans as soon the elements are added to list the item gets appended to array and if the array size is full then it doubles the array and copy all elements into that arraylist.</p>
<br>



#### ArrayList class :

<p class="gray-col">The class of Arraylist.</p>

<code>
   import java.util.*;
   public class ArrayListCustom\< T \> implements Cloneable {
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

<br>

#### add(K val) :

<p class="gray-col">Appends the specified element to the end of this list.</p>

<code>
    private void doubleArr() {
        Object[] temp = new Object[arr.length * 2];
        for (int i = 0; i < arr.length; i++) {
            temp[i] = arr[i];
        }
        arr = temp;
    }

    public boolean add(T val) {
        if (arr.length == size) {
            doubleArr();
        }
        arr[size++] = (T) val;
        return ((T) arr[size - 1]).equals(val);
    }

</code>
<br>

#### add(K val,int index) :

<p class="gray-col">Inserts the specified element at the specified position in this list.</p>

<code>
    public void add(int index, T val) {
        if (index >= size) {
            for (int i = 0; i < index - size - 1; i++) {
                this.add((T) new Object());
            }
            this.add(val);
        } else {
            doubleArr();
            for (int i = size - 1; i >= index; i--) {
                arr[i + 1] = arr[i];
            }
            arr[index] = val;
            size++;
        }
    }
</code>
<br>

#### addAll(Collection <\? extends E> c) :

<p class="gray-col">Appends all of the elements in the specified collection to the end of this list, in the order that they are returned by the specified collection's Iterator.</p>

<code>
     public boolean addAll(Collection< ? extends T> c) {
        int prevSize = size();
        c.forEach(item -> this.add(item));
        return (size() - prevSize) == c.size();
     }
</code>
<br>

#### clone() :

<p class="gray-col">Returns a shallow copy of this ArrayList instance.</p>

<code>
    @Override
    public Object clone() throws CloneNotSupportedException {
        return super.clone();
    }
</code>
<br/>

#### get(int index) :

<p class="gray-col">Returns the element at the specified position in this list.</p>

<code>
    public T get(int index) {
        if (index >= size) {
            throw new RuntimeException("No Such Element Exception");
        }
        return (T) arr[index];
    }
</code>
<br>

#### size() :

<p class="gray-col">Returns the number of elements in this list.</p>

<code>
    public int size() {
        return size;
    }
</code>
<br>

#### remove(int index) :

<p class="gray-col">Removes the element at the specified position in this list.</p>

<code>
    public T remove(int index) {
        if (index >= size) {
            throw new RuntimeException("Index Out Of Bounds Exception");
        }
        T rem = (T) arr[index];
        for (int i = index + 1; i < size; i++) {
            arr[i - 1] = arr[i];
        }
        size -= 1;
        return rem;
    }

</code>
<br>

#### contains(T val) :

<p class="gray-col">Returns true if this list contains the specified element.</p>
<code>
    public boolean contains(T val) {
        for (int i = 0; i < size; i++) {
            if (((T) arr[i]).equals(val)) {
                return true;
            }
        }
        return false;
    }
</code>
<br>

#### isEmpty() :

<p class="gray-col">Returns true if this list contains no elements.</p>

<code>
    public boolean isEmpty() {
        return size() == 0;
    }
</code>
<br>

#### toString() :

<p class="gray-col">Returns String notation of list.</p>

<code>
    @Override
    public String toString() {
        StringBuilder builder = new StringBuilder();
        builder.append("[");
        if (isEmpty()) {
            return builder.append("]").toString();
        }
        int i = 0;
        for (; i < size - 1; i++) {
            builder.append((T) arr[i]);
            builder.append(", ");
        }
        builder.append((T) arr[i]);
        return builder.append("]").toString();
    }
</code>
<br>

#### toArray() :

<p class="gray-col">Returns an array containing all of the elements in this list in proper sequence (from first to last element).</p>

<code>
        public Object [] toArray() {
            Object[] ret = new Object[size];
            for (int i = 0; i < size; i++) {
                ret[i] = arr[i];
            }
            return ret;
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
