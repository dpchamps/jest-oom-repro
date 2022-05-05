
  describe("some-evil-spec=991", () => {
    it("evil-block-991", () => {
      window.evil_991 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  