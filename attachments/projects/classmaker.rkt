;; The first three lines of this file were inserted by DrRacket. They record metadata
;; about the language level of this file in a form that our tools can easily process.
#reader(lib "htdp-advanced-reader.ss" "lang")((modname classmaker) (read-case-sensitive #t) (teachpacks ()) (htdp-settings #(#t constructor repeating-decimal #t #t none #f ())))
(define-struct arg (type name))
;; An Arg is a (make-arg String String)
;; Interp: The name is the name of the argument and the type is the type of data
;; in Java.
;; Example:
(define ex1 (list (make-arg "int" "x") (make-arg "String" "q")))

;; class: String [Listof Arg] -> String
;; Develop a string which when pasted into a Java file is a class.

#; (check-expect (class "ExampleClass" empty)
"class ExampleClass {
    
    ExampleClass() {}
}")

#; (check-expect (class "ExamplesClass" ex1)
"class ExampleClass {
    int x;
    String q;
    
    ExampleClass(int x, String q) {
    this.x = x
    this.q = q
    }
}")
 
(define (class name loa)
  (printf (string-append "class " name " {\n    "
                         (arg-maker loa)
                         (call-maker name loa)
                         (this-calls loa)
                         "\n}")))

;; arg-maker: [Listof Arg] -> String
;; Develop the argument section of the class.

; (check-expect (arg-maker ex1) "int x;\n    String q;\n    \n    ")

;; Template:
#;(define (arg-maker lst)
  (local [(define (arg acc lst)
            (cond [(empty? lst) ...]
                  [else (arg ( ... (arg-type (first lst)) ...
                             ... (arg-name (first lst)) ...)
                             (rest lst))]))]
    (arg ... lst)))

(define (arg-maker lst)
  (local [(define (arg acc lst)
            (cond [(empty? lst) (string-append acc "\n    ")]
                  [else (arg (string-append acc
                                            (arg-type (first lst))
                                            " "
                                            (arg-name (first lst))
                                            ";\n    ")
                             (rest lst))]))]
    (arg "" lst)))

(check-expect (arg-maker ex1) "int x;\n    String q;\n    \n    ")


;; call-maker: String [Listof Arg] -> String
;; Develop the call section of a class.

#; (check-expect (call-maker "ExampleClass" ex1)
                 "ExampleClass(int x, String q) {")

;; Template:
#;(define (call-maker n lst)
  (local [(define (calls l)
            (cond [(empty? l) ...]
                  [else (... (arg-type (first l)) ... (arg-name (first l))
                             ... (calls (rest l)) ...)]))]
    (cond [(empty? lst) ...]
          [else (... (calls lst) ...)])))

(define (call-maker n lst)
  (local [(define (calls l)
            (string-append (arg-type (first l)) " " (arg-name (first l))
                          (cond [(empty? (rest l)) ") {"]
                                [else (string-append ", " (calls (rest l)))])))]
    (cond [(empty? lst) (string-append n "() {}")]
          [else (string-append n "(" (calls lst))])))

(check-expect (call-maker "ExampleClass" empty) "ExampleClass() {}")
(check-expect (call-maker "ExampleClass" ex1) "ExampleClass(int x, String q) {")

;; this-calls: [Listof Arg] -> String
;; Develop the this.name section of a class.

; (check-expect (this-calls ex1) "\n    this.x = x\n    this.q = q\n    }")

;; Template:
#;(define (this-calls l)
  (cond [(empty? l) ...]
        [else (... (arg-name (first l)) ... (arg-name (first l))
                             (this-calls (rest l)))]))
(define (this-calls l)
  (local [(define (this lst) 
            (cond [(empty? lst) "\n    }"]
                  [else (string-append "\n    this." (arg-name (first lst)) " = " 
                                       (arg-name (first lst)) ";"
                                       (this (rest lst)))]))]
    (cond [(empty? l) ""]
          [else (this l)])))
  
(check-expect (this-calls ex1) "\n    this.x = x;\n    this.q = q;\n    }")