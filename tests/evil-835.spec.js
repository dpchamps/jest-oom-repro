
  describe("some-evil-spec=835", () => {
    it("evil-block-835", () => {
      window.evil_835 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  