export default {
    algorithmsArraySearch: [{
        _id: "1",
        name: "Sequential Search",
        algo: "def sequentialSearch(array, searchingNumber): \n" +
            "   found = False\n" +
            "   i = 0\n" +
            "   index = -1\n" +
            "    while i < len(array) and not found:\n" +
            "        if array[i] == searchingNumber:\n" +
            "            index = i\n" +
            "            found = True\n" +
            "        i += 1\n" +
            "    if index != int(-1):\n" +
            "        print(\"Found at position: \" + str(index))\n" +
            "    else:\n" +
            "        print(\"Not found!\")\n"

        },
        {
            _id: "2",
            name: "Binary Search",
            algo: "def binarySearch(array, searchingNumber):\n" +
                "    found = False\n" +
                "    index = -1\n" +
                "    left = 0\n" +
                "    right = len(array) - 1\n" +
                "    while left <= right and not found:\n" +
                "        mid = (left + right) // 2\n" +
                "        if array[mid] < searchingNumber:\n" +
                "            left = mid + 1\n" +
                "        elif array[mid] > searchingNumber:\n" +
                "            right = mid - 1\n" +
                "        else:\n" +
                "            print(\"Found at: \" + str(mid))\n" +
                "            found = True\n"
        },
        {
            _id: "3",
            name: "Fibonacci Search",
            algo: "def fibonacciSearch(array, searchingNumber):\n" +
                "    found = False\n" +
                "    f1 = 0\n" +
                "    f2 = 1\n" +
                "    f3 = 1\n" +
                "    while f3 < (len(array) - 1):\n" +
                "        f1 = f2\n" +
                "        f2 = f3\n" +
                "        f3 = f1 + f2\n" +
                "    low = 0\n" +
                "    index = -1\n" +
                "    high = len(array) - 1\n" +
                "    while high >= low and not found:\n" +
                "        i = low + f2 - 1\n" +
                "        f3 = f2\n" +
                "        f2 = f1\n" +
                "        f1 = f3 - f2\n" +
                "        if searchingNumber == array[i]:\n" +
                "            found = True\n" +
                "            index = i\n" +
                "        else:\n" +
                "            if searchingNumber < array[i]:\n" +
                "                high = i - 1\n" +
                "            else:\n" +
                "                low = i + 1\n" +
                "                f3 = f2\n" +
                "                f2 = f1\n" +
                "                f1 = f3 - f2\n" +
                "    if found:\n" +
                "        print(\"Found at: \" + str(index))\n" +
                "    else:\n" +
                "        print(\"Not found!\")"
        },
        {
            _id: "4",
            name: "Block Search",
            algo: "def blockSearch(array, searchingNumber):\n" +
                "    found = False\n" +
                "    size = math.sqrt(len(array))\n" +
                "    i = size\n" +
                "    j = len(array) - 1\n" +
                "    if searchingNumber > array[j]:\n" +
                "        index = len(array)\n" +
                "        print(\"Found1: \" + str(index))\n" +
                "    else:\n" +
                "        while i < len(interpolationSearch()):\n" +
                "            if searchingNumber <= array[i]:\n" +
                "                j = i\n" +
                "                i = len(array)\n" +
                "            else:\n" +
                "                i = i + size\n" +
                "                if i > len(array) - 1:\n" +
                "                    i = len(array) - 1\n" +
                "            i = j - size\n" +
                "            for i in j:\n" +
                "                if searchingNumber == array[i]:\n" +
                "                    index = i\n" +
                "                    found = True\n" +
                "                    break\n" +
                "                else:\n" +
                "                    if searchingNumber < array[i]:\n" +
                "                        index = i\n" +
                "                        break\n" +
                "            if found:\n" +
                "                print(\"Found : \" + index)\n" +
                "            else:\n" +
                "                print(\"Not found\")"
        },
        {
            _id: "5",
            name: "Interpolation Search",
            algo: "def interpolationSearch(array, searchingNumber):\n" +
                "    found = False\n" +
                "    low = 0\n" +
                "    high = len(array) - 1\n" +
                "    while array[low] <= searchingNumber and searchingNumber <= array[high] and not found:\n" +
                "        f = float((high - low) / (array[high] - array[low]) * (searchingNumber - array[low]))\n" +
                "        mid = int(f + 0.5)\n" +
                "        i = mid + low\n" +
                "        if (searchingNumber == array[i]):\n" +
                "            found = True\n" +
                "            index = i\n" +
                "        else:\n" +
                "            if searchingNumber > array[i]:\n" +
                "                low = i + 1\n" +
                "            else:\n" +
                "                high = i - 1\n" +
                "    if found == True:\n" +
                "        print(\"Found at: \" + str(index))\n" +
                "    else:\n" +
                "        print(\"Not found!\")"
        }],

    algorithmsArrayClassification: [{
            _id: "6",
            name: 'Bubble Sort',
            algo: "def bubbleSort(array):\n" +
                "    for i in range(len(array)):\n" +
                "        for j in range(0, len(array) -1):\n" +
                "            if array[j] > array[j+1]:\n" +
                "                array[j+1], array[j]= array[j], array[j+1]\n" +
                "    return array"
        },
        {
            _id: "7",
            name: "Quick Sort",
            algo: "def quickSort(array, low, high):\n" +
                "    i= low\n" +
                "    j= high\n" +
                "    mid= (low + high) // 2\n" +
                "    x= array[mid]\n" +
                "    while i<= j :\n" +
                "        while array[i] < x:\n" +
                "            i+=1\n" +
                "        while array[j] > x:\n" +
                "            j -= 1\n" +
                "        if i<=j:\n" +
                "            array[i], array[j]= array[j], array[i]\n" +
                "            i+=1\n" +
                "            j-=1\n" +
                "        if low < j:\n" +
                "            quickSort(array, low, j)\n" +
                "        elif i < high:\n" +
                "            quickSort(array, i, high)\n" +
                "    return array"
        },
        {
            _id: "8",
            name: "Selection Sort",
            algo: "def selectionSort(array):\n" +
                "    for i in range(len(array)):\n" +
                "        min= i\n" +
                "        for j in range(i+1, len(array)):\n" +
                "            if array[min]> array[j]:\n" +
                "                min= j\n" +
                "        array[i], array[min]= array[min], array[i]\n" +
                "    return array"
        },
        {
            _id: "9",
            name: "Straight Insertion Sort",
            algo: "def straightInsertionSort(array):\n" +
                "    for i in range(1, len(array)):\n" +
                "        j= i-1\n" +
                "        index= array[i]\n" +
                "        while j>=0 and index < array[j]:\n" +
                "            array[j+1]= array[j]\n" +
                "            j-=1\n" +
                "        array[j+1]= index\n" +
                "    return array"
        }],
    algorithmsStringSearch: [{
        _id: "10",
        name: "Brute Force",
        algo: "def bruteForce(array, wordSearch):\n" +
            "    flag=0\n" +
            "    firstChar= wordSearch[0]\n" +
            "    for i in range(len(array) - len(wordSearch)+1):\n" +
            "        if firstChar == array[i]:\n" +
            "            i, j= 1, i+1\n" +
            "            while i < len(wordSearch):\n" +
            "                if wordSearch[i] == array[j]:\n" +
            "                    if flag == 0:\n" +
            "                        start= i\n" +
            "                        flag=1\n" +
            "                    i+=1\n" +
            "                    j+=1\n" +

            "                else:\n" +
            "                    break\n" +

            "            else:\n" +
            "                print(\"Found at \"+ str(start) + \" end \"+ str(i))"
    }],
    algorithmStack: [{
        _id: "11",
        name: "Stack",
        algo: "def stack(stack):\n" +
            "    choice= 1\n" +
            "    while choice != 3:\n" +
            "        print(\"What you want to do 1.Push\\n 2.Pop\\n3.Close\")\n" +
            "\n" +
            "        # First we look the size of the stack\n" +
            "        print(\"Size of stack: \" + str(len(stack)))\n" +
            "\n" +
            "        choice= int(input())\n" +
            "\n" +
            "        if choice == 1:\n" +
            "            print(\"Enter the data \")\n" +
            "            x= input()\n" +
            "            stack.append(x)\n" +
            "\n" +
            "            # Print the stack size\n" +
            "            print(\"Stack size: \" + str(len(stack)))\n" +
            "\n" +
            "            # Print the top number\n" +
            "            print(\"Stack top: \" + stack[-1])\n" +
            "\n" +
            "        if choice == 2:\n" +
            "            if len(stack) >= 1 :\n" +
            "                print(\"Pop: \" + stack.pop())\n" +
            "\n" +
            "                # Print the new stack size\n" +
            "                print(\"New stack size: \"+ str(len(stack)))\n" +
            "\n" +
            "                # Print the top\n" +
            "                print(\"Stack top: \" + str(stack[-1]))"
    }],
    algorithmQueue: [{
        _id: "12",
        name: "Queue",
        algo: "def queue(queue):\n" +
            "\n" +
            "    choice=1\n" +
            "    while choice != 3:\n" +
            "        print(\"What you want to do 1.Insert\\n 2.Dequeue\\n 3.Close\")\n" +
            "\n" +
            "        # First we look the size\n" +
            "        print(\"Size of the queue: \" + str(len(queue)))\n" +
            "\n" +
            "        choice= int(input())\n" +
            "\n" +
            "        if choice == 1:\n" +
            "            print(\"Enter your type: \")\n" +
            "            x= input()\n" +
            "            queue.append(x)\n" +
            "\n" +
            "            # Prints the new size of the queue\n" +
            "            print(\"New size: \" + str(len(queue)))\n" +
            "\n" +
            "        if choice == 2:\n" +
            "            if len(queue) < 1:\n" +
            "                print(\"Error\")\n" +
            "\n" +
            "            else:\n" +
            "                print(\"Dequeue: \"+ str(queue.pop(0)))\n" +
            "\n" +
            "                # Prints the new size of the queue\n" +
            "                print(\"New size: \" + str(len(queue)))\n"
    }],
    algorithmTree: [{
        _id: "13",
        name: "Tree",
        algo: "root = None\n" +
            "\n" +
            "ch=0\n" +
            "\n" +
            "# First we need to create the class\n" +
            "class node:\n" +
            "\n" +
            "    def __init__(self):\n" +
            "        self.data = \"\"\n" +
            "        self.left = None\n" +
            "        self.right = None\n" +
            "\n" +
            "\n"
        },
        {
            _id: "14",
            name: "Find max",
            algo: "            def findMax(root):\\n\" +\n" +
                "                if root.right is None:" + "\n" +
                "                    print(root)" + "\n" +
                "                else:" + "\n" +
                "                    findMax(root.right)" + "\n"
        },
        {
            _id: "15",
            name: "Count nodes",
            algo: "            def countNodes(root):" + "\n" +
                "                sum=0 " + "\n" +
                "                if root is not None:"  + "\n" +
                "                    sum= countNodes(root.left)" + "\n" +
                "                    sum+= 1" + "\n" +
                "                    sum+= countNodes(root.right)" + "\n" +
                "                return sum" + "\n"
        },
        {
            _id: "16",
            name: "Insert Data ",
            algo: "            def insertTree(root, dat): " + "\n" +
                "                if dat.data <= root.data: " + "\n" +
                "                    if root.left is None: " + "\n"
        },
        {
            _id: "17",
            name: "Print the tree",
            algo: "            def showTree(root):" + "\n" +
                "                if root != None:" + "\n" +
                "                    showTree(root.left)" + "\n" +
                "                    print(root.data)" + "\n" +
                "                    showTree(root.right)"
        },
        {
            _id: "18",
            name: "Create Node",
            algo: "def createNode():\n" +
                "    root = node()\n" +
                "    print(\"Give data: \")\n" +
                "    dat = int(input())\n" +
                "    root.data = dat\n" +
                "\n" +
                "    return root\n" +
                "\n" +

                "        else:\n" +
                "            insertTree(root.left, dat)\n" +
                "\n" +
                "    if dat.data > root.data:\n" +
                "        if root.right is None:\n" +
                "            root.right = dat\n" +
                "        else:\n" +
                "            insertTree(root.right, dat)\n" +
                "\n"
        }]
}