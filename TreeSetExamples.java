import java.util.Set;
import java.util.TreeSet;

public class TreeSetExamples {
    public static void main(String args[]){

        Set<Integer> treeSet = new TreeSet<>();
        treeSet.add(1);
        treeSet.add(600);

        treeSet.add(250);

        treeSet.add(50);

        treeSet.add(33);
        System.out.println(treeSet);
        treeSet.add(6);
        System.out.println(treeSet);
        Set<String> wordSet = new TreeSet<>();

        wordSet.add("Tiger");
        wordSet.add("elephant");
        System.out.println(wordSet);







    }
    
}
