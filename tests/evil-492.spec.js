
  describe("some-evil-spec=492", () => {
    it("evil-block-492", () => {
      window.evil_492 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  