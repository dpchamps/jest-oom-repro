
  describe("some-evil-spec=23", () => {
    it("evil-block-23", () => {
      window.evil_23 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  