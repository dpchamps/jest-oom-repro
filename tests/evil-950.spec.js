
  describe("some-evil-spec=950", () => {
    it("evil-block-950", () => {
      window.evil_950 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  