
  describe("some-evil-spec=33", () => {
    it("evil-block-33", () => {
      window.evil_33 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  