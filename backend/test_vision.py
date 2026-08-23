import asyncio
import json
import websockets


async def main():

    interview_id = 1

    url = f"ws://127.0.0.1:8000/vision/{interview_id}"

    print(f"Connecting to {url}...")

    async with websockets.connect(url) as websocket:

        print("Connected!")

        with open("test_image.jpg", "rb") as f:
            image_bytes = f.read()

        print(f"Sending {len(image_bytes)} bytes...")

        await websocket.send(image_bytes)

        response = await websocket.recv()

        data = json.loads(response)

        print("\n========== CV RESULT ==========")
        print(json.dumps(data, indent=2))
        print("================================")


if __name__ == "__main__":
    asyncio.run(main())