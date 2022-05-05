
  describe("some-evil-spec=518", () => {
    it("evil-block-518", () => {
      window.evil_518 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  