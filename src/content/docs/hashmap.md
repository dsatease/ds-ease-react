# HashMap

A HashMap is a class in java which implements Map Interface that gives you a feature to store key-value pair. HashMap uses a hashing algorithm in which key is hashed and stored in array to that hashed index, hence retrieval and storing takes constant times. But when a duplicate data is provided to HashMap it overrides the previous data.

<br>

HashMap allows you to store null elements as well.

<br>

The each key value pair class can be represented as :

<br>

<code>
    public class Entry \< K, V > {
        K key;
        V val;
        Entry<K, V> next;

        public Entry(K key, V val, Entry<K, V> next) {
            this.key = key;
            this.val = val;
            this.next = next;
        }

        public Entry(K key, V val) {
            this.key = key;
            this.val = val;
            this.next = null;
        }
    }
</code>



<br>


- The key in the class Entry\< K, V \> stands for key , val stands for value and next is used in order to store other values of same hashed key;


<br>

- let us understand it using an array of type Entry\< K,V > called bucket[]. and let size of this be 10(for easy understanding purpose).


<br>

- We use put method in order to store that key value pair in Map, that return a boolean ie. true when added ,false when not added to Map

<br>
<img src="https://miro.medium.com/max/720/1*8WXDtHuWl9cpueiGiSfUqg.png" width="100%">

<br>

Initially the bucket is empty so lets add two data
<br>

ie put(45,”string1") and put(99,”String2");

<br>

Now in the hood 45 key is hashed with a hashing algorithm, Here we are gonna use a simple hashing algo which hashes a key like this : key%bucket.length

<br>

The bucket length is 10 and key is 45 hence the hash we get is 5, so at location 5 in bucket we store “string1” and same goes with key 99 and stored at index 9. So now our array looks like this :

<br>


<img src="https://miro.medium.com/max/720/1*BMNt6Nra-mVDGl1GtRpb2g.png" width="100%">

<br>


So, everything works great until I add 55,65 or some other value whose hash value is 5, because at index 5 data is already present, this is called Hash Collision and we can tackle this using linear chaining technique. Now whatever data is provided it will be added to next of that object. So lets add 55 with “string3” and 65 with “string4”

<br>

<img src="https://miro.medium.com/max/720/1*8JO00-KWeCU7y8pTUXM-fg.png" width="100%">

<br>
<br>

Hence this can take O(L) complexity in order to fetch a data in this case, where L is length of linked list chain.

<br>


Here is the complete custom implementation of HashMap in Java

<br>

#### HashMap class :
<p class="gray-col">The class of hashmap</p>


<code>
public class HashMapCustom \< K, V> {
    private final int DEFAULT_CAPACITY = 17;
    private final Entry[] bucket = new Entry[DEFAULT_CAPACITY];
    private int size = 0;
}
</code>

<br>

#### HashCode method :
<p class="gray-col">Returns the hashcode of a key</p>

<code>
 private int hashCode(K key) {
      return key.hashCode() % bucket.length;
}
</code>

<br>

#### put(K key, V value) :
<p class="gray-col"> Associates the specified value with the specified key in this map.</p>

<code>
    public boolean put(K key, V val) {
        int hash = hashCode(key);
        if (bucket[hash] == null) {
            bucket[hash] = new Entry(key, val, null);
            size++;
            return true;
        }
        Entry temp = bucket[hash];
        if (temp.key.equals(key)) {
            temp.val = val;
            return true;
        }
        while (temp.next != null) {
            if (temp.key.equals(key)) {
                temp.val = val;
                return true;
            }
            temp = temp.next;
        }
        size++;
        temp.next = new Entry(key, val, null);
        return true;
    }
</code>

<br>

#### get(Object key)
<p class="gray-col">Returns the value to which the specified key is mapped, or null if this map contains no mapping for the key.</p>

<code>
    public V get(K key) {
        int hash = hashCode(key);
        Entry temp = bucket[hash];
        while (temp != null) {
            if (temp.key.equals(key)) {
                return (V) temp.val;
            }
            temp = temp.next;
        }
        return null;
    }

</code>

<br>

#### containsKey(Object key)
<p class="gray-col">Returns true if this map contains a mapping for the specified key.</p>
<code>
    public boolean containsKey(K key) {
        return get(key) != null;
    }
</code>


<br>

#### containsValue(V val)
<p class="gray-col">Returns true if this map maps one or more keys to the specified value.</p>
<code>
    public boolean containsValue(V val) {
        for (int i = 0; i < bucket.length; i++) {
            Entry temp = bucket[i];
            while (temp != null) {
                if (temp.val.equals(val)) {
                    return true;
                }
                temp = temp.next;
            }
        }
        return false;
    }
</code>

<br>

#### remove(Object key)
<p class="gray-col">Removes the mapping for the specified key from this map if present.</p>
<code>
  public V remove(K key) {
        int hash = hashCode(key);
        Entry temp = bucket[hash];
        if (temp == null) {
            throw new RuntimeException("No such element exception");
        }
        if (temp.key.equals(key)) {
            V retval = (V) bucket[hash].val;
            bucket[hash] = temp.next;
            size--;
            return retval;
        }
        while (temp.next != null) {
            if (temp.next.key.equals(key)) {
                break;
            }
            temp = temp.next;
        }
        if (temp.next == null) {
            throw new RuntimeException("No such element exception");
        }
        V retval = (V) temp.next.val;
        temp.next = temp.next.next;
        size--;
        return retval;
    }
</code>

<br>

#### getOrDefault(Object key, V defaultValue)
<p class="gray-col">Returns the value to which the specified key is mapped, or defaultValue if this map contains no mapping for the key.</p>
<code>
    public V getOrDefault(K key, V defaultValue) {
        V value = get(key);
        if (value != null) {
            return value;
        }
        return defaultValue;
    }
</code>

<br>

#### clear()
<p class="gray-col">Removes all of the mappings from this map.</p>
<code>
  public void clear() {
        for (int i = 0; i < bucket.length; i++) {
            bucket[i] = null;
        }
  }
</code>

<br>

#### size()
<p class="gray-col">Returns the number of key-value mappings in this map.</p>
<code>
public int size() {
        return size;
}
</code>


<br>

#### toString()
<p class="gray-col">Returns the string value of map</p>
<code>
@Override
    public String toString() {
        String str = "{ ";
        for (int i = 0; i < bucket.length; i++) {
            Entry temp = bucket[i];
            while (temp != null) {
                str += temp.key + "=" + temp.val + " ";
                temp = temp.next;
            }
        }
        str += "}";
        return str;
    }
</code>

<br>
<br>

- <a class="blue" href="https://github.com/nisabmohd/Data-Structures/blob/master/src/Maps/HashMapCustom.java">Check the HashMap.java complete code on GitHub</a>

<br>
<br>
<br>
<br>
