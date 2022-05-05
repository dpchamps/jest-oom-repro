
  describe("some-evil-spec=211", () => {
    it("evil-block-211", () => {
      window.evil_211 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  