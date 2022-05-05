
  describe("some-evil-spec=669", () => {
    it("evil-block-669", () => {
      window.evil_669 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  