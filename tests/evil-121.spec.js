
  describe("some-evil-spec=121", () => {
    it("evil-block-121", () => {
      window.evil_121 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  