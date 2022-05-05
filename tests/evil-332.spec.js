
  describe("some-evil-spec=332", () => {
    it("evil-block-332", () => {
      window.evil_332 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  