
  describe("some-evil-spec=558", () => {
    it("evil-block-558", () => {
      window.evil_558 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  