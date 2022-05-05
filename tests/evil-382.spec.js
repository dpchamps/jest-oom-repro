
  describe("some-evil-spec=382", () => {
    it("evil-block-382", () => {
      window.evil_382 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  