
  describe("some-evil-spec=805", () => {
    it("evil-block-805", () => {
      window.evil_805 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  