
  describe("some-evil-spec=416", () => {
    it("evil-block-416", () => {
      window.evil_416 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  