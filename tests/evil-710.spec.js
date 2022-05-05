
  describe("some-evil-spec=710", () => {
    it("evil-block-710", () => {
      window.evil_710 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  