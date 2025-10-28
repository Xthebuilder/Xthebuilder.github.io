# How running a homelab changed my view of the internet

## How it started

Until recently I thought the internet was essentially a void where you could connect using wifi and get access to all kinds
of content, information, goods etc.
When I started running what is called a home lab that mental framework was reconstructed.
I now know the internet is more like a web of computers connected through physical and virtual links to share and
stream all the content, goods, and information we see and use everyday.

## Building the Homelab

To have something that amounts to the word homelab, all you need is a computer, could be something as obsolete as an
old laptop. The idea is that you use the environment to **LEARN** as long as it has that purpose, then your lab is
just as real as Dexter's Laboratory. I employed a Dell Optiplex 9010 All in one. The computer I used is an old business
model that has the screen and motherboard in one assembly. Unique but also just fine for my very small cloud computing
demands. So with the Dell and a desire to learn I now have what is deemed online as a "homelab".

## Security Issues

So after creating my first two services, Nextcloud (Google Cloud at home), and Pi-hole (control and logbook of all websites
my devices connect to), I was faced with my first **Security Challenge**. That challenge being I wanted to access my services when I was anywhere not just at home connected to the wifi. That purposed two avenues to fix my issue of only being
able to connect to my services while being home. Open my home network and only allow secure access in, or extend my network to the entire world some way. The first way is easy, Open the Ports in your router so that when you call home your
router does what's in its name and routes your request to your computer at home. There's just one issue with that method, if
I can do it that easily, so can any other user of a computer on the internet too. It's generally not advised to open ports
up to the web unless necessary for a myriad of reasons. Let's just suffice to say that the internet is full of dangers
and opening your home network to the internet is not advisable unless you know precisely why you should be doing that.


## My solution

VPNs are commonly advertised as security tools in today's economy. I realized that a VPN is about as private as the
application of your use case. Take my homelab for example. When I use VPN technology to create encrypted tunnels to
connect to my services while being on any network, then that's using it as a privacy and networking utility in one. When
you pay a service provider to take your name and info and let you connect to their network around the globe, there's little
argument to be made to how that would actually benefit you in being private or more secure. I'm going to say what the
experts said when I researched the topic months ago, "a VPN just shifts responsibility from ISP to VPN provider",
and that's about the most I can do in that context. Truly.

## Pi-Hole Data

From being my own network admin for my private cloud for four weeks, I got to reframe my entire view of the internet.
See the internet is just a huge version of my homelab. Computers that are very far from each other or close, but
all connected in one way or another, wifi, ethernet, etc. Once I created my own little micro internet biome,
I was able to see how incredibly simple and complex at the same time the internet was. The other change in view I
gained was that every connection was a chance for a threat because connections or avenues to connect are agnostic
to the user. If I open my home network up then I can connect and so can everyone else. The world of computing probably
mimics the needs of humans where two desperately antagonistic factors are trying to win and a balance of both is usually
the sweet spot. If I had not run my own home lab for just this long, I doubt my conceptual understanding of the underlying complexity of the internet would not have been developed. In that sense *the homelab did what it was born to do.*
