public var speed = 6.0;
var jumpSpeed = 8.0;
var gravity = 20.0;
var country = 1;

function countrySelect () {

if (country == 1) {
Debug.Log("Set to USA(104)");
speed = 104;
} else if( country == 2) {
Debug.Log("Set to China(88)");
speed = 88;
} else if (country == 3) {
Debug.Log("Set to UK(65)");
speed = 65;
} else if(country == 4) {
Debug.Log("Set to Russia(82)");
speed = 82;
} else if (country == 5) {
Debug.Log("Set to Korea(28)");
speed = 28;
} else if (country == 6) {
Debug.Log("Germany(44)");
speed = 44;
} else if (country == 7) {
Debug.Log("Set to France(34)");
speed = 34;
} else if (country == 8) {
Debug.Log("Set to Italy(28)");
speed = 28;
} else if (country == 9) {
Debug.Log("Set to Hungary(17)");
speed = 17;
} else if (country == 10) {
Debug.Log("Set to Australlia(35)");
speed = 35;
} else if (country == 11) {
Debug.Log("Set to Japan(38)");
speed = 38;
} else if (country == 12) {
Debug.Log("Set to Kahzakhtan(13)");
speed = 13;
} else if (country == 13) {
Debug.Log("Set to Netherlands(20)");
speed = 20;
} else if (country == 14) {
Debug.Log("Set to Ukraine(20)");
speed = 20;
} else if (country == 16) {
Debug.Log("Set to New Zeland(13)");
speed = 16;
} else if (country == 17) {
Debug.Log("Set to Cuba(14)");
speed = 14;
} else if (country == 18) {
Debug.Log("Set to Iran(12)");
speed = 12;
} else if (country == 19) {
Debug.Log("Set to Jamaica(12)");
speed = 12;
} else if (country == 20) {
Debug.Log("Set to Czech Republic(10)");
speed = 10;
} else if (country == 21) {
Debug.Log("Set to North Korea(6)");
speed = 6;
} else if (country == 22) {
Debug.Log("Set to Spain(17)");
speed = 17;
} else if (country == 23) {
Debug.Log("Set to Brazil(17)");
speed = 17;
} else if (country == 24) {
Debug.Log("Set to South Africa(6)");
speed =6;
} else if (country == 25) {
Debug.Log("Set to Ethiopia(7)");
speed =7;
} else if (country == 26) {
Debug.Log("Set to Croatia(6)");
speed =6;
} else if (country == 27) {
Debug.Log("Set to Belarus(12)");
speed =12;
} else if (country == 28) {
Debug.Log("Set to Romania(9)");
speed =9;
} else if (country == 29) {
Debug.Log("Set to Kenya(11)");
speed =11;
} else if (country == 30) {
Debug.Log("Set to Denmark(9)");
speed =9;
} else if (country == 31) {
Debug.Log("Set to Poland(10)");
speed =10;
} else if (country == 32) {
Debug.Log("Set to Azerbaijan(10)");
speed =10;
} else if (country == 33) {
Debug.Log("Set to Turkey(5)");
speed =5;
} else if (country == 34) {
Debug.Log("Set to Switzerland(4)");
speed =4;
} else if (country == 35) {
Debug.Log("Set to Lithuania(5)");
speed =5;
} else if (country == 36) {
Debug.Log("Set to Norway(4)");
speed =4;
} else if (country == 37) {
Debug.Log("Set to Canada(18)");
speed =18;
} else if (country == 38) {
Debug.Log("Set to Sweeden(8)");
speed =8;
} else if (country == 39) {
Debug.Log("Set to Colombia(8)");
speed =8;
} else if (country == 40) {
Debug.Log("Set to Mexico(7)");
speed =7;
} else if (country == 41) {
Debug.Log("Set to Georgia(7)");
speed =7;
} else if (country == 42) {
Debug.Log("Set to Ireland(5)");
speed =5;
} else if (country == 43) {
Debug.Log("Set to Serbia(4)");
speed =4;
} else if (country == 44) {
Debug.Log("Set to Slovenia(4)");
speed =4;
} else if (country == 45) {
Debug.Log("Set to Argentina(4)");
speed =4;
} else if (country == 46) {
Debug.Log("Set to Tunisia(3)");
speed =3;
} else if (country == 47) {
Debug.Log("Set to Dominican Republic(2)");
speed =2;
} else if (country == 48) {
Debug.Log("Set to Uzbekistan(4)");
speed =4;
} else if (country == 49) {
Debug.Log("Set to Trinidad and Tobago(4)");
speed =4;
} else if (country == 50) {
Debug.Log("Set to Latvia(2)");
speed =2;
} else if (country == 51) {
Debug.Log("Set to Algeria(1)");
speed =1;
} else if (country == 52) {
Debug.Log("Set to Bahamas(1)");
speed =1;
} else if (country == 53) {
Debug.Log("Set to Uganda(1)");
speed =1;
} else if (country == 54) {
Debug.Log("Set to Grenada(1)");
speed =1;
} else if (country == 55) {
Debug.Log("Set to Venezuela(1)");
speed =1;
} else if (country == 56) {
Debug.Log("Set to India(6)");
speed =6;
} else if (country == 57) {
Debug.Log("Set to Mongolia(5)");
speed =5;
} else if (country == 58) {
Debug.Log("Set to Thailand(3)");
speed =3;
} else if (country == 59) {
Debug.Log("Set to Egypt(2)");
speed =2;
} else if (country == 60) {
Debug.Log("Set to Slovakia(4)");
speed =4;
} else if (country == 61) {
Debug.Log("Set to Finland(3)");
speed =3;
} else if (country == 62) {
Debug.Log("Set to Armenia(3)");
speed =3;
} else if (country == 63) {
Debug.Log("Set to Belgium(3)");
speed =3;
} else if (country == 64) {
Debug.Log("Set to Estonia(2)");
speed =2;
} else if (country == 65) {
Debug.Log("Set to Bulgaria(2)");
speed =2;
} else if (country == 66) {
Debug.Log("Set to Malaysia(2)");
speed =2;
} else if (country == 67) {
Debug.Log("Set to Taipei(2)");
speed =2;
} else if (country == 68) {
Debug.Log("Set to Puerto Rica(2)");
speed =2;
} else if (country == 69) {
Debug.Log("Set to Indonesia(2)");
speed =2;
} else if (country == 70) {
Debug.Log("Set to Portugal(1)");
speed =1;
} else if (country == 71) {
Debug.Log("Set to Cyprus(1)");
speed =1;
} else if (country == 72) {
Debug.Log("Set to Gabon(1)");
speed =1;
} else if (country == 73) {
Debug.Log("Set to Guatemala(1)");
speed =1;
} else if (country == 74) {
Debug.Log("Set to Montenegro(1)");
speed =1;
} else if (country == 75) {
Debug.Log("Set to Boswana(1)");
speed =1;
} else if (country == 76) {
Debug.Log("Set to Republic of Moldova(2)");
speed =2;
} else if (country == 77) {
Debug.Log("Set to Greece(2)");
speed =2;
} else if (country == 78) {
Debug.Log("Set to Qatar(2)");
speed =2;
} else if (country == 79) {
Debug.Log("Set to Singapore(2)");
speed =2;
} else if (country == 80) {
Debug.Log("Set to Kuwait(1)");
speed =1;
} else if (country == 81) {
Debug.Log("Set to Saudi Arabia(1)");
speed =1;
} else if (country == 82) {
Debug.Log("Set to Tajikistan(1)");
speed =1;
} else if (country == 83) {
Debug.Log("Set to Hong Kong(1)");
speed =1;
} else if (country == 84) {
Debug.Log("Set to Afghanistan(1)");
speed =1;
} else if (country == 85) {
Debug.Log("Set to Morocco(1)");
speed =1;
} else if (country == 86) {
Debug.Log("Bahrain(1)");
speed =1;
} 
}

function Start () {
countrySelect();
}

function Update () {

if (Input.GetKey("r")) {
country = Random.Range(1, 86);
}


if (country < 1) {
country = 1;
}

if (country > 86) {
country = 86; 
}

countrySelect();
}

private var moveDirection = Vector3.zero;
private var grounded : boolean = false;

function FixedUpdate() {
	if (grounded) {
		// We are grounded, so recalculate movedirection directly from axes
		moveDirection = new Vector3(Input.GetAxis("Horizontal"), 0, Input.GetAxis("Vertical"));
		moveDirection = transform.TransformDirection(moveDirection);
		moveDirection *= speed;
		
		if (Input.GetButton ("Jump")) {
			moveDirection.y = jumpSpeed;
		}
	}
	


	// Apply gravity
	moveDirection.y -= gravity * Time.deltaTime;
	
	// Move the controller
	var controller : CharacterController = GetComponent(CharacterController);
	var flags = controller.Move(moveDirection * Time.deltaTime);
	grounded = (flags & CollisionFlags.CollidedBelow) != 0;
}


@script RequireComponent(CharacterController)