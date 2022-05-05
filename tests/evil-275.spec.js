
  describe("some-evil-spec=275", () => {
    it("evil-block-275", () => {
      window.evil_275 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  