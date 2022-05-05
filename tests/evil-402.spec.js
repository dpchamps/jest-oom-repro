
  describe("some-evil-spec=402", () => {
    it("evil-block-402", () => {
      window.evil_402 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  