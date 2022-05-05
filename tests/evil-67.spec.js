
  describe("some-evil-spec=67", () => {
    it("evil-block-67", () => {
      window.evil_67 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  