
  describe("some-evil-spec=145", () => {
    it("evil-block-145", () => {
      window.evil_145 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  