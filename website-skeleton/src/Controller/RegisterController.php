<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class RegisterController extends AbstractController
{
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this -> entityManager = $entityManager;
    }

    /**
     * @Route("/inscription", name="app_register", methods={"GET", "POST"})
     */
    public function index(Request $request, UserPasswordEncoderInterface $encoder, EntityManagerInterface $entityManager): Response
    {
        if ($request->isMethod('POST')) {
            $name = $_POST['name'];
            $email = $_POST['email'];
            $password = $_POST['password'];

            // Créez une nouvelle instance de l'entité User
            $user = new User();
            $user->setName($name);
            $user->setEmail($email);
            

            
            // Encodez le mot de passe
            $encodedPassword = $encoder->encodePassword($user, $password);
            $user->setPassword($encodedPassword);

            // dd($name, $email, $encodedPassword);
            // Persistez l'entité User dans la base de données
            $entityManager->persist($user);
            $entityManager->flush();

            // Redirigez vers une autre page après l'inscription réussie
            return $this->redirectToRoute('app_register');
        }

        return $this->render('register/index.html.twig');
    }
}


