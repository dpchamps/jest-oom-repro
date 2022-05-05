
  describe("some-evil-spec=777", () => {
    it("evil-block-777", () => {
      window.evil_777 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  