// package Main;
import java.util.Scanner;
import javax.swing.JOptionPane;

public class Main{
	public static void main(String[] args) {
		Scanner myObj = new Scanner(System.in);
		System.out.println("Elija un ejercicio: ");
		int decision = myObj.nextInt();
        switch(decision) {
            case 21:
                ejercicio21();
                break;
            case 22:
                ejercicio22();
                break;
            case 23:
                ejercicio23();
                break;
            case 24:
                ejercicio24();
                break; 
            // case 25:
            //     ejercicio25();
            //     break;
            case 26:
                ejercicio26();
                break;
            case 27:
                ejercicio27();
                break;
            // case 28:
            //     ejercicio28();
            //     break;
            // case 29:
            //     ejercicio29();
            //     break;
        }
    }
    
    
    private static void ejercicio21() {
        for (int i=1;i<=100;i++){
            int raiz=(int)Math.sqrt(i);
            int contador=0;
 
            for (int j=raiz;j>1;j--){
                if (i%j==0){
                    contador++;
                }
            }
            if (contador<1){
                System.out.println(i);
            }
 
        }
    }
    private static void ejercicio22(){
        String texto="Hola mi nombre es Tomas Palermo";
 
        int contador=0;
        for (int i=0;i<texto.length();i++){
            if(texto.charAt(i)=='a' || 
                    texto.charAt(i)=='e' || 
                    texto.charAt(i)=='i' || 
                    texto.charAt(i)=='o' || 
                    texto.charAt(i)=='u'){
                contador++;
            }
        }
 
        System.out.println("Hay "+contador+" vocales en la palabra " + texto);
    }
    private static void ejercicio23(){
        String texto="Hola mi nombre es Tomas Palermo";
        String textomodificado = texto.replace('a', 'e');
        System.out.println(textomodificado);
    }
    private static void ejercicio24(){
        String texto="Hola mi nombre es Tomas Palermo";   

        for (int i = 0; i < texto.length(); i++) {
            int asciiValue = (int) texto.charAt(i);
            System.out.print(asciiValue + " ");
        }
    }
    private static void ejercicio26() {
        Scanner myObj26=new Scanner(System.in);
        
        
        System.out.println("Ingrese un numero mayor a 1");
        int num;
        
        do{
           num=myObj26.nextInt();
           
           if(num<=1){
               System.out.println("Error. No has introducido un valor correcto."
                       + "Vuelve a intentarlo");
           }
            
        }while(!(num>=1));
        
        int suma=0;
        
        for(int contador=1;contador<=num;contador++){
            suma+=contador;
        } 
            
        System.out.println("La suma es: " + suma);
    }
    private static void ejercicio27(){
        Scanner myObj27=new Scanner(System.in);
       int num=myObj27.nextInt();
       
       int contador=0;
       
       while(num!=-1){
           
           contador++;
           num=myObj27.nextInt(); 
       }
        
       System.out.println("Fin, se ha introducido "+contador+" numeros");
    }
}